import OldSchoolBlazeraOtServerKeywordPage, { generateMetadata } from './old-school-blazera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraOtServerKeywordPage />;
}
