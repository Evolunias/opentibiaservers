import HighrateTrashformersOtsKeywordPage, { generateMetadata } from './highrate-trashformers-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersOtsKeywordPage />;
}
