import Archlight12NonPvpServerKeywordPage, { generateMetadata } from './archlight-12-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12NonPvpServerKeywordPage />;
}
