import HighrateMiracleOtsKeywordPage, { generateMetadata } from './highrate-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMiracleOtsKeywordPage />;
}
