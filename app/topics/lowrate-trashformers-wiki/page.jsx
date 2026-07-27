import LowrateTrashformersWikiKeywordPage, { generateMetadata } from './lowrate-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTrashformersWikiKeywordPage />;
}
