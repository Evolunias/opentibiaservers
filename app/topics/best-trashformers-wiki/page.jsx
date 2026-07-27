import BestTrashformersWikiKeywordPage, { generateMetadata } from './best-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersWikiKeywordPage />;
}
