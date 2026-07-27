import NewShadowcoresRulesKeywordPage, { generateMetadata } from './new-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewShadowcoresRulesKeywordPage />;
}
