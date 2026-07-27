import ActiveTrashformersWikiKeywordPage, { generateMetadata } from './active-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersWikiKeywordPage />;
}
