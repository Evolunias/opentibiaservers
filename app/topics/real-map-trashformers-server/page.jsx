import RealMapTrashformersServerKeywordPage, { generateMetadata } from './real-map-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTrashformersServerKeywordPage />;
}
