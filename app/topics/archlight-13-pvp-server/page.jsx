import Archlight13PvpServerKeywordPage, { generateMetadata } from './archlight-13-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13PvpServerKeywordPage />;
}
