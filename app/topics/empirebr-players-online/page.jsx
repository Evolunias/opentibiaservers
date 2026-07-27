import EmpirebrPlayersOnlineKeywordPage, { generateMetadata } from './empirebr-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EmpirebrPlayersOnlineKeywordPage />;
}
