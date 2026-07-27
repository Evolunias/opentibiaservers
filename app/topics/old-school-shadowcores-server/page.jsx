import OldSchoolShadowcoresServerKeywordPage, { generateMetadata } from './old-school-shadowcores-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresServerKeywordPage />;
}
