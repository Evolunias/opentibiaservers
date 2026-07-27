import OldSchoolNilotOtServerKeywordPage, { generateMetadata } from './old-school-nilot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotOtServerKeywordPage />;
}
