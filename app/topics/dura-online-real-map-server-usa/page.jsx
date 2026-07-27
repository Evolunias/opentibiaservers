import DuraOnlineRealMapServerUsaKeywordPage, { generateMetadata } from './dura-online-real-map-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DuraOnlineRealMapServerUsaKeywordPage />;
}
