import Serenity11WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity11WithActivePlayersServerKeywordPage />;
}
