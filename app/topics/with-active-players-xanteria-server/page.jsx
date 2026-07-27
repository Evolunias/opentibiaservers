import WithActivePlayersXanteriaServerKeywordPage, { generateMetadata } from './with-active-players-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersXanteriaServerKeywordPage />;
}
