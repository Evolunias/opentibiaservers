import HighrateTrashformersOtKeywordPage, { generateMetadata } from './highrate-trashformers-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersOtKeywordPage />;
}
