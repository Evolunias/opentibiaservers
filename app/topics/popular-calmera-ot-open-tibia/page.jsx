import PopularCalmeraOtOpenTibiaKeywordPage, { generateMetadata } from './popular-calmera-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtOpenTibiaKeywordPage />;
}
