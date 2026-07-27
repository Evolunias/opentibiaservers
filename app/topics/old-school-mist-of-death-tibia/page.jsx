import OldSchoolMistOfDeathTibiaKeywordPage, { generateMetadata } from './old-school-mist-of-death-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMistOfDeathTibiaKeywordPage />;
}
