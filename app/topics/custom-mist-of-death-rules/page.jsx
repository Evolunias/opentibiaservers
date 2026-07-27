import CustomMistOfDeathRulesKeywordPage, { generateMetadata } from './custom-mist-of-death-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMistOfDeathRulesKeywordPage />;
}
