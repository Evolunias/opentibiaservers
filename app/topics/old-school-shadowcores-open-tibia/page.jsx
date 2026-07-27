import OldSchoolShadowcoresOpenTibiaKeywordPage, { generateMetadata } from './old-school-shadowcores-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresOpenTibiaKeywordPage />;
}
