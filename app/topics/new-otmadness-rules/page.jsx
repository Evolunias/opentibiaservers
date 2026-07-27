import NewOtmadnessRulesKeywordPage, { generateMetadata } from './new-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOtmadnessRulesKeywordPage />;
}
