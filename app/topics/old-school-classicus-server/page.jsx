import OldSchoolClassicusServerKeywordPage, { generateMetadata } from './old-school-classicus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusServerKeywordPage />;
}
