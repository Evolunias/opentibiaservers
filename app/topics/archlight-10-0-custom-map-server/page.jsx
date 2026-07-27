import Archlight100CustomMapServerKeywordPage, { generateMetadata } from './archlight-10-0-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight100CustomMapServerKeywordPage />;
}
