import PopularOtmadnessOpenTibiaKeywordPage, { generateMetadata } from './popular-otmadness-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessOpenTibiaKeywordPage />;
}
