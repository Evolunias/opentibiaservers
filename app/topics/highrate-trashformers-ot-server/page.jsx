import HighrateTrashformersOtServerKeywordPage, { generateMetadata } from './highrate-trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersOtServerKeywordPage />;
}
