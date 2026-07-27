import BaiakServerPvpKeywordPage, { generateMetadata } from './baiak-server-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakServerPvpKeywordPage />;
}
