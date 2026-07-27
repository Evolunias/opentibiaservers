import Archlight12PvpServerKeywordPage, { generateMetadata } from './archlight-12-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12PvpServerKeywordPage />;
}
