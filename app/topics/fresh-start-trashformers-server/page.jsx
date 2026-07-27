import FreshStartTrashformersServerKeywordPage, { generateMetadata } from './fresh-start-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTrashformersServerKeywordPage />;
}
