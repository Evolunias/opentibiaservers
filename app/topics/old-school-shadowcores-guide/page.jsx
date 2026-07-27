import OldSchoolShadowcoresGuideKeywordPage, { generateMetadata } from './old-school-shadowcores-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresGuideKeywordPage />;
}
