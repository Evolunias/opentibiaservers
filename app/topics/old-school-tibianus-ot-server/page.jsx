import OldSchoolTibianusOtServerKeywordPage, { generateMetadata } from './old-school-tibianus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusOtServerKeywordPage />;
}
