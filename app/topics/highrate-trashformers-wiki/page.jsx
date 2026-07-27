import HighrateTrashformersWikiKeywordPage, { generateMetadata } from './highrate-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersWikiKeywordPage />;
}
