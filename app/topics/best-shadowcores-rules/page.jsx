import BestShadowcoresRulesKeywordPage, { generateMetadata } from './best-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestShadowcoresRulesKeywordPage />;
}
