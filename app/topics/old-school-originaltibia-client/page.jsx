import OldSchoolOriginaltibiaClientKeywordPage, { generateMetadata } from './old-school-originaltibia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOriginaltibiaClientKeywordPage />;
}
