import BestTrashformersTibiaKeywordPage, { generateMetadata } from './best-trashformers-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTrashformersTibiaKeywordPage />;
}
