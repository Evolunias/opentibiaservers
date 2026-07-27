import TrashformersFunServerKeywordPage, { generateMetadata } from './trashformers-fun-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersFunServerKeywordPage />;
}
