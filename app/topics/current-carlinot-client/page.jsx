import CurrentCarlinotClientKeywordPage, { generateMetadata } from './current-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotClientKeywordPage />;
}
