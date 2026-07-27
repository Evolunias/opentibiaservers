import OldSchoolRubinotServerKeywordPage, { generateMetadata } from './old-school-rubinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotServerKeywordPage />;
}
