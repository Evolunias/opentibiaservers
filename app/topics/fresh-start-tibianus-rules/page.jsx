import FreshStartTibianusRulesKeywordPage, { generateMetadata } from './fresh-start-tibianus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibianusRulesKeywordPage />;
}
