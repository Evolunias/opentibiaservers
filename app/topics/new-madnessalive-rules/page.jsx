import NewMadnessaliveRulesKeywordPage, { generateMetadata } from './new-madnessalive-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMadnessaliveRulesKeywordPage />;
}
