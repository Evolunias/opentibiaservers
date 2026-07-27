import FreshStartTrashformersWikiKeywordPage, { generateMetadata } from './fresh-start-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTrashformersWikiKeywordPage />;
}
