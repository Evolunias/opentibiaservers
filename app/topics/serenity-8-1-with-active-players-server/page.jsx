import Serenity81WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-8-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity81WithActivePlayersServerKeywordPage />;
}
