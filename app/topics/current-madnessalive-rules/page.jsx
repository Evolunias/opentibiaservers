import CurrentMadnessaliveRulesKeywordPage, { generateMetadata } from './current-madnessalive-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveRulesKeywordPage />;
}
