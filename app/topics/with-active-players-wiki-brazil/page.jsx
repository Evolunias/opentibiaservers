import WithActivePlayersWikiBrazilKeywordPage, { generateMetadata } from './with-active-players-wiki-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersWikiBrazilKeywordPage />;
}
