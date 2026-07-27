import PopularTibijkaWebsiteKeywordPage, { generateMetadata } from './popular-tibijka-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaWebsiteKeywordPage />;
}
