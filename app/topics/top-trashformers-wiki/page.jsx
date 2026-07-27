import TopTrashformersWikiKeywordPage, { generateMetadata } from './top-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersWikiKeywordPage />;
}
