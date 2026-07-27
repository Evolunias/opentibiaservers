import OldSchoolRuthlessChaosTibiaKeywordPage, { generateMetadata } from './old-school-ruthless-chaos-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRuthlessChaosTibiaKeywordPage />;
}
