import LowrateThaisotRulesKeywordPage, { generateMetadata } from './lowrate-thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateThaisotRulesKeywordPage />;
}
