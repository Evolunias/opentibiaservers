import Archlight80CustomMapServerKeywordPage, { generateMetadata } from './archlight-8-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight80CustomMapServerKeywordPage />;
}
