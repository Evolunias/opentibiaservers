import HighrateOtmadnessRulesKeywordPage, { generateMetadata } from './highrate-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOtmadnessRulesKeywordPage />;
}
