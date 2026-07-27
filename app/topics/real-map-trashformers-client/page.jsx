import RealMapTrashformersClientKeywordPage, { generateMetadata } from './real-map-trashformers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTrashformersClientKeywordPage />;
}
