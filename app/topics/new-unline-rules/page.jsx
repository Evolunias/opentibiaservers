import NewUnlineRulesKeywordPage, { generateMetadata } from './new-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewUnlineRulesKeywordPage />;
}
