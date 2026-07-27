import JuleraPlayersKeywordPage, { generateMetadata } from './julera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <JuleraPlayersKeywordPage />;
}
