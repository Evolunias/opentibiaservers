import OldSchoolDemolidoresWebsiteKeywordPage, { generateMetadata } from './old-school-demolidores-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresWebsiteKeywordPage />;
}
