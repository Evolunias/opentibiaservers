import Archlight86CustomMapServerKeywordPage, { generateMetadata } from './archlight-8-6-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight86CustomMapServerKeywordPage />;
}
