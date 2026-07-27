import OldSchoolUnlineClientKeywordPage, { generateMetadata } from './old-school-unline-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineClientKeywordPage />;
}
