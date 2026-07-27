import Archlight11PvpServerKeywordPage, { generateMetadata } from './archlight-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11PvpServerKeywordPage />;
}
