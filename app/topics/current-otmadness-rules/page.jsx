import CurrentOtmadnessRulesKeywordPage, { generateMetadata } from './current-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessRulesKeywordPage />;
}
