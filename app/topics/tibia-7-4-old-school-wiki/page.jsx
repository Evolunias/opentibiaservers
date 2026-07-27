import Tibia74OldSchoolWikiKeywordPage, { generateMetadata } from './tibia-7-4-old-school-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74OldSchoolWikiKeywordPage />;
}
