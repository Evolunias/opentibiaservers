import ImperianicRulesKeywordPage, { generateMetadata } from './imperianic-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicRulesKeywordPage />;
}
