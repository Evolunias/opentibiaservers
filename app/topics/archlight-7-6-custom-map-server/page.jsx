import Archlight76CustomMapServerKeywordPage, { generateMetadata } from './archlight-7-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight76CustomMapServerKeywordPage />;
}
