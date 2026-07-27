import PopularTibiantisWebsiteKeywordPage, { generateMetadata } from './popular-tibiantis-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiantisWebsiteKeywordPage />;
}
