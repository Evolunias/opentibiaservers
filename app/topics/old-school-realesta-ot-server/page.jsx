import OldSchoolRealestaOtServerKeywordPage, { generateMetadata } from './old-school-realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaOtServerKeywordPage />;
}
