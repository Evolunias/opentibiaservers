import ThaisotRulesKeywordPage, { generateMetadata } from './thaisot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotRulesKeywordPage />;
}
