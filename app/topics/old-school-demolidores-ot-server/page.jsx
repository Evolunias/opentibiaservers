import OldSchoolDemolidoresOtServerKeywordPage, { generateMetadata } from './old-school-demolidores-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresOtServerKeywordPage />;
}
