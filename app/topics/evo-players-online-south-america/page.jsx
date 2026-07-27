import EvoPlayersOnlineSouthAmericaKeywordPage, { generateMetadata } from './evo-players-online-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoPlayersOnlineSouthAmericaKeywordPage />;
}
