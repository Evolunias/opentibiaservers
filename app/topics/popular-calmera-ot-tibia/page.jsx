import PopularCalmeraOtTibiaKeywordPage, { generateMetadata } from './popular-calmera-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtTibiaKeywordPage />;
}
