import EvoPlayersOnlineSwedenKeywordPage, { generateMetadata } from './evo-players-online-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoPlayersOnlineSwedenKeywordPage />;
}
