import OldSchoolOriginaltibiaGuideKeywordPage, { generateMetadata } from './old-school-originaltibia-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOriginaltibiaGuideKeywordPage />;
}
