import PopularShadowcoresRulesKeywordPage, { generateMetadata } from './popular-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularShadowcoresRulesKeywordPage />;
}
