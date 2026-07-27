import TopAlasteraRulesKeywordPage, { generateMetadata } from './top-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraRulesKeywordPage />;
}
