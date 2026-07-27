import OldSchoolKasteriaOtServerKeywordPage, { generateMetadata } from './old-school-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaOtServerKeywordPage />;
}
