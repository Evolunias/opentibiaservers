import OldSchoolClassicusLoginKeywordPage, { generateMetadata } from './old-school-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusLoginKeywordPage />;
}
