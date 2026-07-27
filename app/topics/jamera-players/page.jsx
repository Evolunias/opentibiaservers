import JameraPlayersKeywordPage, { generateMetadata } from './jamera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JameraPlayersKeywordPage />;
}
