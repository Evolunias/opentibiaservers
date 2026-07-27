import FreshStartCarlinotLoginKeywordPage, { generateMetadata } from './fresh-start-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotLoginKeywordPage />;
}
