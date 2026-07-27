import PopularCalmeraOtWebsiteKeywordPage, { generateMetadata } from './popular-calmera-ot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtWebsiteKeywordPage />;
}
