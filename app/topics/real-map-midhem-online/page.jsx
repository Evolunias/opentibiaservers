import RealMapMidhemOnlineKeywordPage, { generateMetadata } from './real-map-midhem-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemOnlineKeywordPage />;
}
