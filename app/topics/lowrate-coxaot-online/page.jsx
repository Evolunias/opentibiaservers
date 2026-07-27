import LowrateCoxaotOnlineKeywordPage, { generateMetadata } from './lowrate-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotOnlineKeywordPage />;
}
