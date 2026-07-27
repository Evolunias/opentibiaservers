import FreshStartMiracleLoginKeywordPage, { generateMetadata } from './fresh-start-miracle-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMiracleLoginKeywordPage />;
}
