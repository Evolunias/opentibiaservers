import PopularCalmeraOtGuideKeywordPage, { generateMetadata } from './popular-calmera-ot-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtGuideKeywordPage />;
}
