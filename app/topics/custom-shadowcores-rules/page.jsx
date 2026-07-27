import CustomShadowcoresRulesKeywordPage, { generateMetadata } from './custom-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomShadowcoresRulesKeywordPage />;
}
