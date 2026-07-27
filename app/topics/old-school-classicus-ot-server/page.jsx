import OldSchoolClassicusOtServerKeywordPage, { generateMetadata } from './old-school-classicus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusOtServerKeywordPage />;
}
