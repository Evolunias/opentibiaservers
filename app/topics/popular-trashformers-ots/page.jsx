import PopularTrashformersOtsKeywordPage, { generateMetadata } from './popular-trashformers-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersOtsKeywordPage />;
}
