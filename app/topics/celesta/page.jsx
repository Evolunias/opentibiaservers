import CelestaKeywordPage, { generateMetadata } from './celesta';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaKeywordPage />;
}
