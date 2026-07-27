import PopularCalmeraOtOtsKeywordPage, { generateMetadata } from './popular-calmera-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtOtsKeywordPage />;
}
