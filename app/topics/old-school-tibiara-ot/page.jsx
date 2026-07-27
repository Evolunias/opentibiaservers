import OldSchoolTibiaraOtKeywordPage, { generateMetadata } from './old-school-tibiara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraOtKeywordPage />;
}
