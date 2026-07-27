import OldSchoolRubinotLoginKeywordPage, { generateMetadata } from './old-school-rubinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotLoginKeywordPage />;
}
