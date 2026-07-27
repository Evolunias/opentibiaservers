import DanubiaPlayersKeywordPage, { generateMetadata } from './danubia-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DanubiaPlayersKeywordPage />;
}
