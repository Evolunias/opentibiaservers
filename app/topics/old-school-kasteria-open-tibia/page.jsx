import OldSchoolKasteriaOpenTibiaKeywordPage, { generateMetadata } from './old-school-kasteria-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaOpenTibiaKeywordPage />;
}
