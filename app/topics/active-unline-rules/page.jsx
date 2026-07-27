import ActiveUnlineRulesKeywordPage, { generateMetadata } from './active-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineRulesKeywordPage />;
}
