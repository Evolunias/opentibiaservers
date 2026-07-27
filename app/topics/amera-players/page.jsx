import AmeraPlayersKeywordPage, { generateMetadata } from './amera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeraPlayersKeywordPage />;
}
