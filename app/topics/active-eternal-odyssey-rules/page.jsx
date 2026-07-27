import ActiveEternalOdysseyRulesKeywordPage, { generateMetadata } from './active-eternal-odyssey-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveEternalOdysseyRulesKeywordPage />;
}
