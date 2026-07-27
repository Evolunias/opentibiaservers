import RealMapZezeniaOnlineKeywordPage, { generateMetadata } from './real-map-zezenia-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapZezeniaOnlineKeywordPage />;
}
