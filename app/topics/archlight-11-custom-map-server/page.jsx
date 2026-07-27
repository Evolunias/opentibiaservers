import Archlight11CustomMapServerKeywordPage, { generateMetadata } from './archlight-11-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11CustomMapServerKeywordPage />;
}
