import TrashformersSwedenServersKeywordPage, { generateMetadata } from './trashformers-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersSwedenServersKeywordPage />;
}
