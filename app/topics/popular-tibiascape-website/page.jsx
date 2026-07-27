import PopularTibiascapeWebsiteKeywordPage, { generateMetadata } from './popular-tibiascape-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeWebsiteKeywordPage />;
}
