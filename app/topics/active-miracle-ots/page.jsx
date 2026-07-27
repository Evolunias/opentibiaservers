import ActiveMiracleOtsKeywordPage, { generateMetadata } from './active-miracle-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleOtsKeywordPage />;
}
