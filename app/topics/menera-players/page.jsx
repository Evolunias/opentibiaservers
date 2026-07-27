import MeneraPlayersKeywordPage, { generateMetadata } from './menera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraPlayersKeywordPage />;
}
