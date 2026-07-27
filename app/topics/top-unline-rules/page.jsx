import TopUnlineRulesKeywordPage, { generateMetadata } from './top-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineRulesKeywordPage />;
}
