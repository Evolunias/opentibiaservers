import TopMiracleKeywordPage, { generateMetadata } from './top-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMiracleKeywordPage />;
}
