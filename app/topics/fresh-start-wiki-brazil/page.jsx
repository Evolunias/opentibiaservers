import FreshStartWikiBrazilKeywordPage, { generateMetadata } from './fresh-start-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartWikiBrazilKeywordPage />;
}
