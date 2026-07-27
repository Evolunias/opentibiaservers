import CurrentAmeriaRulesKeywordPage, { generateMetadata } from './current-ameria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAmeriaRulesKeywordPage />;
}
