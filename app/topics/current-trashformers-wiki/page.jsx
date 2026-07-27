import CurrentTrashformersWikiKeywordPage, { generateMetadata } from './current-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersWikiKeywordPage />;
}
