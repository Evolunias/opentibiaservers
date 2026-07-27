import SoleraKeywordPage, { generateMetadata } from './solera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraKeywordPage />;
}
