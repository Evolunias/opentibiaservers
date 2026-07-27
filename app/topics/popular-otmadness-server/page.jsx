import PopularOtmadnessServerKeywordPage, { generateMetadata } from './popular-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessServerKeywordPage />;
}
