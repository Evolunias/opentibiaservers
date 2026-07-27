import TopMiracleServerKeywordPage, { generateMetadata } from './top-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleServerKeywordPage />;
}
