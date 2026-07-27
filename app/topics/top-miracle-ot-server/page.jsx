import TopMiracleOtServerKeywordPage, { generateMetadata } from './top-miracle-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleOtServerKeywordPage />;
}
