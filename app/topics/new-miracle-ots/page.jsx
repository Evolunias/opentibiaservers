import NewMiracleOtsKeywordPage, { generateMetadata } from './new-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleOtsKeywordPage />;
}
