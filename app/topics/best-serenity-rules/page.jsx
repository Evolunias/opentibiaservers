import BestSerenityRulesKeywordPage, { generateMetadata } from './best-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSerenityRulesKeywordPage />;
}
