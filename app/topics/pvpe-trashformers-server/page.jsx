import PvpeTrashformersServerKeywordPage, { generateMetadata } from './pvpe-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeTrashformersServerKeywordPage />;
}
