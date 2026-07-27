import FreshStartUnlineRulesKeywordPage, { generateMetadata } from './fresh-start-unline-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartUnlineRulesKeywordPage />;
}
