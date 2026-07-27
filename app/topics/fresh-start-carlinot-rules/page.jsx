import FreshStartCarlinotRulesKeywordPage, { generateMetadata } from './fresh-start-carlinot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotRulesKeywordPage />;
}
