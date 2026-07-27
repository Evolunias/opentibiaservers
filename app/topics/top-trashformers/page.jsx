import TopTrashformersKeywordPage, { generateMetadata } from './top-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersKeywordPage />;
}
