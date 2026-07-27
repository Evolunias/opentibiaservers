import CurrentImperianicRulesKeywordPage, { generateMetadata } from './current-imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentImperianicRulesKeywordPage />;
}
