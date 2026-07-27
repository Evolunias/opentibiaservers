import VineraPlayersKeywordPage, { generateMetadata } from './vinera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraPlayersKeywordPage />;
}
