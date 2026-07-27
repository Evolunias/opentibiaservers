import PvpWikiBrazilKeywordPage, { generateMetadata } from './pvp-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpWikiBrazilKeywordPage />;
}
