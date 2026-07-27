import OldSchoolOriginaltibiaServerKeywordPage, { generateMetadata } from './old-school-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOriginaltibiaServerKeywordPage />;
}
