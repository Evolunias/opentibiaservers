import FreshStartMiracleServerKeywordPage, { generateMetadata } from './fresh-start-miracle-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMiracleServerKeywordPage />;
}
