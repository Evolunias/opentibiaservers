import OfficialUnlineRulesKeywordPage, { generateMetadata } from './official-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialUnlineRulesKeywordPage />;
}
