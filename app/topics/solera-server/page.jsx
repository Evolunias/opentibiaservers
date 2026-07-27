import SoleraServerKeywordPage, { generateMetadata } from './solera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraServerKeywordPage />;
}
