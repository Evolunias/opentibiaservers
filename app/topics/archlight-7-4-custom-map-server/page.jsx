import Archlight74CustomMapServerKeywordPage, { generateMetadata } from './archlight-7-4-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight74CustomMapServerKeywordPage />;
}
