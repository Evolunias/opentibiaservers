import Archlight80NonPvpServerKeywordPage, { generateMetadata } from './archlight-8-0-non-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight80NonPvpServerKeywordPage />;
}
