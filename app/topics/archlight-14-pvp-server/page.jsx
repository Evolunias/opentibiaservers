import Archlight14PvpServerKeywordPage, { generateMetadata } from './archlight-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14PvpServerKeywordPage />;
}
