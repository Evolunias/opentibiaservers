import DuraOnlineRealMapServerBrazilKeywordPage, { generateMetadata } from './dura-online-real-map-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRealMapServerBrazilKeywordPage />;
}
