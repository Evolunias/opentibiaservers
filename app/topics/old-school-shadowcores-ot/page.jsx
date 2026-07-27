import OldSchoolShadowcoresOtKeywordPage, { generateMetadata } from './old-school-shadowcores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresOtKeywordPage />;
}
