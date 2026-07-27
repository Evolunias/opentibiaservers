import TopTrashformersOtsKeywordPage, { generateMetadata } from './top-trashformers-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersOtsKeywordPage />;
}
