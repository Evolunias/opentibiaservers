import PopularCalmeraOtWikiKeywordPage, { generateMetadata } from './popular-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtWikiKeywordPage />;
}
