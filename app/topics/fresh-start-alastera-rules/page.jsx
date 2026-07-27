import FreshStartAlasteraRulesKeywordPage, { generateMetadata } from './fresh-start-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraRulesKeywordPage />;
}
