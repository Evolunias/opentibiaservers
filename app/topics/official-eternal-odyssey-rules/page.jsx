import OfficialEternalOdysseyRulesKeywordPage, { generateMetadata } from './official-eternal-odyssey-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialEternalOdysseyRulesKeywordPage />;
}
