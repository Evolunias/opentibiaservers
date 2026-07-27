import OldSchoolDemolidoresClientKeywordPage, { generateMetadata } from './old-school-demolidores-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresClientKeywordPage />;
}
