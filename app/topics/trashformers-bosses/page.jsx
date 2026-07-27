import TrashformersBossesKeywordPage, { generateMetadata } from './trashformers-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersBossesKeywordPage />;
}
