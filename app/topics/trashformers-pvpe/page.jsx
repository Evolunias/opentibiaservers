import TrashformersPvpeKeywordPage, { generateMetadata } from './trashformers-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersPvpeKeywordPage />;
}
