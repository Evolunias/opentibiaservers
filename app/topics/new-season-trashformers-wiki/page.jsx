import NewSeasonTrashformersWikiKeywordPage, { generateMetadata } from './new-season-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonTrashformersWikiKeywordPage />;
}
