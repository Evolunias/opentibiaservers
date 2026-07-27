import OfficialShadowcoresGuideKeywordPage, { generateMetadata } from './official-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialShadowcoresGuideKeywordPage />;
}
