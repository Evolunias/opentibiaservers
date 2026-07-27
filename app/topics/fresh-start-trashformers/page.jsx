import FreshStartTrashformersKeywordPage, { generateMetadata } from './fresh-start-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTrashformersKeywordPage />;
}
