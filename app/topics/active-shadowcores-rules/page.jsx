import ActiveShadowcoresRulesKeywordPage, { generateMetadata } from './active-shadowcores-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveShadowcoresRulesKeywordPage />;
}
