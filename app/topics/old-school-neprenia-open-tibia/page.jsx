import OldSchoolNepreniaOpenTibiaKeywordPage, { generateMetadata } from './old-school-neprenia-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaOpenTibiaKeywordPage />;
}
