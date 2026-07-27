import Tibia14OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-14-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14OldSchoolWikiKeywordPage />;
}
