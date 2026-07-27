import Serenity80WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-8-0-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity80WithActivePlayersServerKeywordPage />;
}
