import CurrentCarlinotWebsiteKeywordPage, { generateMetadata } from './current-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCarlinotWebsiteKeywordPage />;
}
