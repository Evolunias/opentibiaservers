import TrashformersSwedenServerKeywordPage, { generateMetadata } from './trashformers-sweden-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersSwedenServerKeywordPage />;
}
