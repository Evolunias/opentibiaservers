import OfficialMadnessaliveRulesKeywordPage, { generateMetadata } from './official-madnessalive-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveRulesKeywordPage />;
}
