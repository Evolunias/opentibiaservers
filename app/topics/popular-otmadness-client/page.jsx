import PopularOtmadnessClientKeywordPage, { generateMetadata } from './popular-otmadness-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessClientKeywordPage />;
}
