import OldSchoolMadnessaliveTibiaKeywordPage, { generateMetadata } from './old-school-madnessalive-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMadnessaliveTibiaKeywordPage />;
}
