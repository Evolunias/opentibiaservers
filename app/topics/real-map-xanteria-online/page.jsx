import RealMapXanteriaOnlineKeywordPage, { generateMetadata } from './real-map-xanteria-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaOnlineKeywordPage />;
}
