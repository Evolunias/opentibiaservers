import RealMapTrashformersKeywordPage, { generateMetadata } from './real-map-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTrashformersKeywordPage />;
}
