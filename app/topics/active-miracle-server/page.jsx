import ActiveMiracleServerKeywordPage, { generateMetadata } from './active-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMiracleServerKeywordPage />;
}
