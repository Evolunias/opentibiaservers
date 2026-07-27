import Serenity76WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-7-6-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity76WithActivePlayersServerKeywordPage />;
}
