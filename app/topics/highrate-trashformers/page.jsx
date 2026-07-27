import HighrateTrashformersKeywordPage, { generateMetadata } from './highrate-trashformers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersKeywordPage />;
}
