import OldSchoolMistOfDeathOtsKeywordPage, { generateMetadata } from './old-school-mist-of-death-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMistOfDeathOtsKeywordPage />;
}
