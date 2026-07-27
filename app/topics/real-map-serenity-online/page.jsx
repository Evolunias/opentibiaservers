import RealMapSerenityOnlineKeywordPage, { generateMetadata } from './real-map-serenity-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSerenityOnlineKeywordPage />;
}
