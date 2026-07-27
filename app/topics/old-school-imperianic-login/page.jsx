import OldSchoolImperianicLoginKeywordPage, { generateMetadata } from './old-school-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicLoginKeywordPage />;
}
