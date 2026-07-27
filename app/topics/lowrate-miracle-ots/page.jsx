import LowrateMiracleOtsKeywordPage, { generateMetadata } from './lowrate-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleOtsKeywordPage />;
}
