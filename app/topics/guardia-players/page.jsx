import GuardiaPlayersKeywordPage, { generateMetadata } from './guardia-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GuardiaPlayersKeywordPage />;
}
