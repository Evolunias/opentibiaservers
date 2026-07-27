import DuraOnlineRealMapServerUkKeywordPage, { generateMetadata } from './dura-online-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRealMapServerUkKeywordPage />;
}
