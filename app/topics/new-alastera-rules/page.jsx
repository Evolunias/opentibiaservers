import NewAlasteraRulesKeywordPage, { generateMetadata } from './new-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewAlasteraRulesKeywordPage />;
}
