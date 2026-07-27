import Archlight11NonPvpServerKeywordPage, { generateMetadata } from './archlight-11-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11NonPvpServerKeywordPage />;
}
