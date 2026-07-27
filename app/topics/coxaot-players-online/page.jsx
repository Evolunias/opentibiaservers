import CoxaotPlayersOnlineKeywordPage, { generateMetadata } from './coxaot-players-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotPlayersOnlineKeywordPage />;
}
