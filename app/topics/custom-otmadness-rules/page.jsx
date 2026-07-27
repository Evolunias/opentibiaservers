import CustomOtmadnessRulesKeywordPage, { generateMetadata } from './custom-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomOtmadnessRulesKeywordPage />;
}
