import ActiveMiracleLoginKeywordPage, { generateMetadata } from './active-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleLoginKeywordPage />;
}
