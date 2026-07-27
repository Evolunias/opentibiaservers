import OldSchoolClassicusPrivateServerKeywordPage, { generateMetadata } from './old-school-classicus-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusPrivateServerKeywordPage />;
}
