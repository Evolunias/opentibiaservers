import OldSchoolRealeraGuideKeywordPage, { generateMetadata } from './old-school-realera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraGuideKeywordPage />;
}
