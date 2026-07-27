import BaiakMiracleServerKeywordPage, { generateMetadata } from './baiak-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BaiakMiracleServerKeywordPage />;
}
