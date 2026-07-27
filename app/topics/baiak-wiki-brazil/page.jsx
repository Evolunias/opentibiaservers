import BaiakWikiBrazilKeywordPage, { generateMetadata } from './baiak-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakWikiBrazilKeywordPage />;
}
