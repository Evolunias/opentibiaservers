import OfficialShadowcoresRulesKeywordPage, { generateMetadata } from './official-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresRulesKeywordPage />;
}
