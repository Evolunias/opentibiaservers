import Archlight13NonPvpServerKeywordPage, { generateMetadata } from './archlight-13-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13NonPvpServerKeywordPage />;
}
