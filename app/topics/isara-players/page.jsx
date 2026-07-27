import IsaraPlayersKeywordPage, { generateMetadata } from './isara-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <IsaraPlayersKeywordPage />;
}
