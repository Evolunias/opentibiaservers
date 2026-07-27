import LowExpWikiBrazilKeywordPage, { generateMetadata } from './low-exp-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpWikiBrazilKeywordPage />;
}
