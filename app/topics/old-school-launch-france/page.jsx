import OldSchoolLaunchFranceKeywordPage, { generateMetadata } from './old-school-launch-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLaunchFranceKeywordPage />;
}
