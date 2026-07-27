import OldSchoolRubinotOfficialKeywordPage, { generateMetadata } from './old-school-rubinot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotOfficialKeywordPage />;
}
