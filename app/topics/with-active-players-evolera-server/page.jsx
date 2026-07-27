import WithActivePlayersEvoleraServerKeywordPage, { generateMetadata } from './with-active-players-evolera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersEvoleraServerKeywordPage />;
}
