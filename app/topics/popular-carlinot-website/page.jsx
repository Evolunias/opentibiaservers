import PopularCarlinotWebsiteKeywordPage, { generateMetadata } from './popular-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCarlinotWebsiteKeywordPage />;
}
