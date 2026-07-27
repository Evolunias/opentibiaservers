import OldSchoolNtoStarGuideKeywordPage, { generateMetadata } from './old-school-nto-star-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNtoStarGuideKeywordPage />;
}
