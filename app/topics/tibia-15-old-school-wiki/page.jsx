import Tibia15OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-15-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolWikiKeywordPage />;
}
