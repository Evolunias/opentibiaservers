import OldSchoolTibiaraOtServerKeywordPage, { generateMetadata } from './old-school-tibiara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraOtServerKeywordPage />;
}
