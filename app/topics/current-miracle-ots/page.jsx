import CurrentMiracleOtsKeywordPage, { generateMetadata } from './current-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMiracleOtsKeywordPage />;
}
