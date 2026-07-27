import PopularOtmadnessRulesKeywordPage, { generateMetadata } from './popular-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessRulesKeywordPage />;
}
