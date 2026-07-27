import RealMapTrashformersWikiKeywordPage, { generateMetadata } from './real-map-trashformers-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTrashformersWikiKeywordPage />;
}
