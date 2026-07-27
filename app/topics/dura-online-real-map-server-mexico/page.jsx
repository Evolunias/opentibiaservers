import DuraOnlineRealMapServerMexicoKeywordPage, { generateMetadata } from './dura-online-real-map-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRealMapServerMexicoKeywordPage />;
}
