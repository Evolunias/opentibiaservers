import EternalOdysseyRulesKeywordPage, { generateMetadata } from './eternal-odyssey-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyRulesKeywordPage />;
}
