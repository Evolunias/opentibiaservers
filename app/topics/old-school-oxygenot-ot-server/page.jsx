import OldSchoolOxygenotOtServerKeywordPage, { generateMetadata } from './old-school-oxygenot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotOtServerKeywordPage />;
}
