import PopularMistOfDeathRulesKeywordPage, { generateMetadata } from './popular-mist-of-death-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMistOfDeathRulesKeywordPage />;
}
