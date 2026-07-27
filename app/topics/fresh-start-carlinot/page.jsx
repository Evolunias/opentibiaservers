import FreshStartCarlinotKeywordPage, { generateMetadata } from './fresh-start-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotKeywordPage />;
}
