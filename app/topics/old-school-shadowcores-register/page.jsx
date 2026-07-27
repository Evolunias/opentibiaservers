import OldSchoolShadowcoresRegisterKeywordPage, { generateMetadata } from './old-school-shadowcores-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresRegisterKeywordPage />;
}
