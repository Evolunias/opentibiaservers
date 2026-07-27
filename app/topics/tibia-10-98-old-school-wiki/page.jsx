import Tibia1098OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-10-98-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098OldSchoolWikiKeywordPage />;
}
