import Tibia12OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-12-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolWikiKeywordPage />;
}
