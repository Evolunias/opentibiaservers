import OldSchoolDemolidoresOtKeywordPage, { generateMetadata } from './old-school-demolidores-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresOtKeywordPage />;
}
