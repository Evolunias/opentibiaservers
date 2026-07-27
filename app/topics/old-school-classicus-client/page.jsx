import OldSchoolClassicusClientKeywordPage, { generateMetadata } from './old-school-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusClientKeywordPage />;
}
