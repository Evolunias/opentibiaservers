import RealMapClassicusOnlineKeywordPage, { generateMetadata } from './real-map-classicus-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusOnlineKeywordPage />;
}
