import OldSchoolShadowcoresWebsiteKeywordPage, { generateMetadata } from './old-school-shadowcores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresWebsiteKeywordPage />;
}
