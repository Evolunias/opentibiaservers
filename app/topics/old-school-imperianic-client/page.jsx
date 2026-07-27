import OldSchoolImperianicClientKeywordPage, { generateMetadata } from './old-school-imperianic-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicClientKeywordPage />;
}
