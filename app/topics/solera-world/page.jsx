import SoleraWorldKeywordPage, { generateMetadata } from './solera-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraWorldKeywordPage />;
}
