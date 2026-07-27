import NewTrashformersWikiKeywordPage, { generateMetadata } from './new-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersWikiKeywordPage />;
}
