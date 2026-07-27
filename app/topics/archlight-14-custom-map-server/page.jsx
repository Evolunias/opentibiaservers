import Archlight14CustomMapServerKeywordPage, { generateMetadata } from './archlight-14-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14CustomMapServerKeywordPage />;
}
