import TrashformersPvpKeywordPage, { generateMetadata } from './trashformers-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersPvpKeywordPage />;
}
