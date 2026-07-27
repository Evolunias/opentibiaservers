import OldSchoolShadowcoresClientKeywordPage, { generateMetadata } from './old-school-shadowcores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresClientKeywordPage />;
}
