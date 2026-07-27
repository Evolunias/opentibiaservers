import LiberaPlayersKeywordPage, { generateMetadata } from './libera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaPlayersKeywordPage />;
}
