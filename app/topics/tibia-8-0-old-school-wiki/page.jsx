import Tibia80OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-8-0-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolWikiKeywordPage />;
}
