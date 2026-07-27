import OldSchoolTrashformersWikiKeywordPage, { generateMetadata } from './old-school-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTrashformersWikiKeywordPage />;
}
