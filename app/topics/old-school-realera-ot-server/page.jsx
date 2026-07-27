import OldSchoolRealeraOtServerKeywordPage, { generateMetadata } from './old-school-realera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraOtServerKeywordPage />;
}
