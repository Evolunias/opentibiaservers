import Tibia84OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-8-4-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84OldSchoolWikiKeywordPage />;
}
