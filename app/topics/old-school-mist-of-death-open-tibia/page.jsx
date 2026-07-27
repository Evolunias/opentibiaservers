import OldSchoolMistOfDeathOpenTibiaKeywordPage, { generateMetadata } from './old-school-mist-of-death-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMistOfDeathOpenTibiaKeywordPage />;
}
