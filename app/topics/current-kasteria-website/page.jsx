import CurrentKasteriaWebsiteKeywordPage, { generateMetadata } from './current-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentKasteriaWebsiteKeywordPage />;
}
