import RealMapCoxaotOnlineKeywordPage, { generateMetadata } from './real-map-coxaot-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotOnlineKeywordPage />;
}
