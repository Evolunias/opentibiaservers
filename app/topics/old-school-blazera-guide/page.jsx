import OldSchoolBlazeraGuideKeywordPage, { generateMetadata } from './old-school-blazera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraGuideKeywordPage />;
}
