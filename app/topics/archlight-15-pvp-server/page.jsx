import Archlight15PvpServerKeywordPage, { generateMetadata } from './archlight-15-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15PvpServerKeywordPage />;
}
