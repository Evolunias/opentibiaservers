import Archlight80PvpServerKeywordPage, { generateMetadata } from './archlight-8-0-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight80PvpServerKeywordPage />;
}
