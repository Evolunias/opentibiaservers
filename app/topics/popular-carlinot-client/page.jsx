import PopularCarlinotClientKeywordPage, { generateMetadata } from './popular-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotClientKeywordPage />;
}
