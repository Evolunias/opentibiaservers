import Tibia854OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-8-54-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854OldSchoolWikiKeywordPage />;
}
