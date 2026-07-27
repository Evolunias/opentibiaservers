import Tibia71OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-7-1-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolWikiKeywordPage />;
}
