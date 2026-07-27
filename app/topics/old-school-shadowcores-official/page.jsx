import OldSchoolShadowcoresOfficialKeywordPage, { generateMetadata } from './old-school-shadowcores-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresOfficialKeywordPage />;
}
