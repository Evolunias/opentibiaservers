import WithActivePlayersNilotServerKeywordPage, { generateMetadata } from './with-active-players-nilot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersNilotServerKeywordPage />;
}
