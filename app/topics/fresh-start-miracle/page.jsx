import FreshStartMiracleKeywordPage, { generateMetadata } from './fresh-start-miracle';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMiracleKeywordPage />;
}
