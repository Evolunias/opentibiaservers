import ShiveraPlayersKeywordPage, { generateMetadata } from './shivera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShiveraPlayersKeywordPage />;
}
