import Tibia76OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-7-6-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76OldSchoolWikiKeywordPage />;
}
