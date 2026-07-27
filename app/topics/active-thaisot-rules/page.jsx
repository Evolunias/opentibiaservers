import ActiveThaisotRulesKeywordPage, { generateMetadata } from './active-thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThaisotRulesKeywordPage />;
}
