import Serenity100WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-10-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity100WithActivePlayersServerKeywordPage />;
}
