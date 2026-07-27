import TopShadowcoresRulesKeywordPage, { generateMetadata } from './top-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopShadowcoresRulesKeywordPage />;
}
