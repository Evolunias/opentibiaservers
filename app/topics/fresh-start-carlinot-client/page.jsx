import FreshStartCarlinotClientKeywordPage, { generateMetadata } from './fresh-start-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotClientKeywordPage />;
}
