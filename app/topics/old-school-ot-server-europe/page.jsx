import OldSchoolOtServerEuropeKeywordPage, { generateMetadata } from './old-school-ot-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOtServerEuropeKeywordPage />;
}
