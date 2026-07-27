import TopMiracleOtsKeywordPage, { generateMetadata } from './top-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleOtsKeywordPage />;
}
