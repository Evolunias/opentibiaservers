import Tibia86OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-8-6-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolWikiKeywordPage />;
}
