import ActiveAlasteraRulesKeywordPage, { generateMetadata } from './active-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraRulesKeywordPage />;
}
