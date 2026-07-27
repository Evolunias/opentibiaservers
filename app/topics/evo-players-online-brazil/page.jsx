import EvoPlayersOnlineBrazilKeywordPage, { generateMetadata } from './evo-players-online-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoPlayersOnlineBrazilKeywordPage />;
}
