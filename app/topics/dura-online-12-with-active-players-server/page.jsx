import DuraOnline12WithActivePlayersServerKeywordPage, { generateMetadata } from './dura-online-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnline12WithActivePlayersServerKeywordPage />;
}
