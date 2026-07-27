import Serenity84WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-8-4-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity84WithActivePlayersServerKeywordPage />;
}
