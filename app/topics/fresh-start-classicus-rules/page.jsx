import FreshStartClassicusRulesKeywordPage, { generateMetadata } from './fresh-start-classicus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartClassicusRulesKeywordPage />;
}
