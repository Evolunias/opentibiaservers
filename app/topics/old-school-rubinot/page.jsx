import OldSchoolRubinotKeywordPage, { generateMetadata } from './old-school-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotKeywordPage />;
}
