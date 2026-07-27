import TrashformersWikiKeywordPage, { generateMetadata } from './trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersWikiKeywordPage />;
}
