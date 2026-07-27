import CurrentNtoStarWebsiteKeywordPage, { generateMetadata } from './current-nto-star-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNtoStarWebsiteKeywordPage />;
}
