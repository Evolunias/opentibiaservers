import OldSchoolDemolidoresKeywordPage, { generateMetadata } from './old-school-demolidores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresKeywordPage />;
}
