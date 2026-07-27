import OldSchoolMistOfDeathOtServerKeywordPage, { generateMetadata } from './old-school-mist-of-death-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMistOfDeathOtServerKeywordPage />;
}
