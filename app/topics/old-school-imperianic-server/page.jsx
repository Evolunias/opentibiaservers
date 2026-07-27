import OldSchoolImperianicServerKeywordPage, { generateMetadata } from './old-school-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicServerKeywordPage />;
}
