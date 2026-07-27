import OldSchoolShadowcoresKeywordPage, { generateMetadata } from './old-school-shadowcores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresKeywordPage />;
}
