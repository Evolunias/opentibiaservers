import HighExpWikiBrazilKeywordPage, { generateMetadata } from './high-exp-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpWikiBrazilKeywordPage />;
}
