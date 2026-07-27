import HighrateCoxaotOnlineKeywordPage, { generateMetadata } from './highrate-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotOnlineKeywordPage />;
}
