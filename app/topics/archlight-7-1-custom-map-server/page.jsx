import Archlight71CustomMapServerKeywordPage, { generateMetadata } from './archlight-7-1-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight71CustomMapServerKeywordPage />;
}
