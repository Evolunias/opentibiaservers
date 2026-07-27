import Tibia13OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-13-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolWikiKeywordPage />;
}
