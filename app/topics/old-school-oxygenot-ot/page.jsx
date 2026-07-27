import OldSchoolOxygenotOtKeywordPage, { generateMetadata } from './old-school-oxygenot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotOtKeywordPage />;
}
