import CurrentAlasteraRulesKeywordPage, { generateMetadata } from './current-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraRulesKeywordPage />;
}
