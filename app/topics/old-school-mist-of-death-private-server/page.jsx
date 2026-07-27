import OldSchoolMistOfDeathPrivateServerKeywordPage, { generateMetadata } from './old-school-mist-of-death-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMistOfDeathPrivateServerKeywordPage />;
}
