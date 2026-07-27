import PopularSerenityRulesKeywordPage, { generateMetadata } from './popular-serenity-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSerenityRulesKeywordPage />;
}
