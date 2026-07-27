import EvoWikiBrazilKeywordPage, { generateMetadata } from './evo-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoWikiBrazilKeywordPage />;
}
