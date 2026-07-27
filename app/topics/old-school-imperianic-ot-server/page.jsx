import OldSchoolImperianicOtServerKeywordPage, { generateMetadata } from './old-school-imperianic-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicOtServerKeywordPage />;
}
