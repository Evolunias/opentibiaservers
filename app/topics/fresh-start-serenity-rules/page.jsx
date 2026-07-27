import FreshStartSerenityRulesKeywordPage, { generateMetadata } from './fresh-start-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSerenityRulesKeywordPage />;
}
