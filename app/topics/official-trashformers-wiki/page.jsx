import OfficialTrashformersWikiKeywordPage, { generateMetadata } from './official-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTrashformersWikiKeywordPage />;
}
