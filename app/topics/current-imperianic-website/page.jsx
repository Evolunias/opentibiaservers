import CurrentImperianicWebsiteKeywordPage, { generateMetadata } from './current-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicWebsiteKeywordPage />;
}
