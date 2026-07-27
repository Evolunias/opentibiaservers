import OldSchoolRubinotOtKeywordPage, { generateMetadata } from './old-school-rubinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotOtKeywordPage />;
}
