import TopMiraclePrivateServerKeywordPage, { generateMetadata } from './top-miracle-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiraclePrivateServerKeywordPage />;
}
