import WithActivePlayersSerenityServerKeywordPage, { generateMetadata } from './with-active-players-serenity-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersSerenityServerKeywordPage />;
}
