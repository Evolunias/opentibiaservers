import CelestaWorldKeywordPage, { generateMetadata } from './celesta-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaWorldKeywordPage />;
}
