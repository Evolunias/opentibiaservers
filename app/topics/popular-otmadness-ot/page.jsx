import PopularOtmadnessOtKeywordPage, { generateMetadata } from './popular-otmadness-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessOtKeywordPage />;
}
