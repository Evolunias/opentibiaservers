import Serenity71WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-7-1-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity71WithActivePlayersServerKeywordPage />;
}
