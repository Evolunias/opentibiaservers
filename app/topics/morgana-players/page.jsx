import MorganaPlayersKeywordPage, { generateMetadata } from './morgana-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaPlayersKeywordPage />;
}
