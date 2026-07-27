import EterniaPlayersKeywordPage, { generateMetadata } from './eternia-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaPlayersKeywordPage />;
}
