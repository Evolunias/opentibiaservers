import PopularOtmadnessOtsKeywordPage, { generateMetadata } from './popular-otmadness-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessOtsKeywordPage />;
}
