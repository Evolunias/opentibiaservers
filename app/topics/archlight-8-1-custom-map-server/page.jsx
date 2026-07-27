import Archlight81CustomMapServerKeywordPage, { generateMetadata } from './archlight-8-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight81CustomMapServerKeywordPage />;
}
