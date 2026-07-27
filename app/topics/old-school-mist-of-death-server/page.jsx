import OldSchoolMistOfDeathServerKeywordPage, { generateMetadata } from './old-school-mist-of-death-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMistOfDeathServerKeywordPage />;
}
