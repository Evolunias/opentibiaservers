import BestAlasteraRulesKeywordPage, { generateMetadata } from './best-alastera-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraRulesKeywordPage />;
}
