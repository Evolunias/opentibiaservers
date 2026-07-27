import Serenity15WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity15WithActivePlayersServerKeywordPage />;
}
