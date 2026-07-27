import Archlight12CustomMapServerKeywordPage, { generateMetadata } from './archlight-12-custom-map-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12CustomMapServerKeywordPage />;
}
