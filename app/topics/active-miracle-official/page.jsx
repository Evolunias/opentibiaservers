import ActiveMiracleOfficialKeywordPage, { generateMetadata } from './active-miracle-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleOfficialKeywordPage />;
}
