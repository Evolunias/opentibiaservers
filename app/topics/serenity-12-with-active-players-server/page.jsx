import Serenity12WithActivePlayersServerKeywordPage, { generateMetadata } from './serenity-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenity12WithActivePlayersServerKeywordPage />;
}
