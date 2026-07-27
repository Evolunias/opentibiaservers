import FreshStartOtmadnessRulesKeywordPage, { generateMetadata } from './fresh-start-otmadness-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOtmadnessRulesKeywordPage />;
}
