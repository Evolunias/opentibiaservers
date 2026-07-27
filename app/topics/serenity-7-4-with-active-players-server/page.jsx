import Serenity74WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-7-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity74WithActivePlayersServerKeywordPage />;
}
