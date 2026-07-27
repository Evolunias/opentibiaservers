import OldSchoolRubinotClientKeywordPage, { generateMetadata } from './old-school-rubinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRubinotClientKeywordPage />;
}
