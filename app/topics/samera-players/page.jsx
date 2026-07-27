import SameraPlayersKeywordPage, { generateMetadata } from './samera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SameraPlayersKeywordPage />;
}
