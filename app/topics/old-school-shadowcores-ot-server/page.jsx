import OldSchoolShadowcoresOtServerKeywordPage, { generateMetadata } from './old-school-shadowcores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresOtServerKeywordPage />;
}
