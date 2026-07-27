import HighrateTrashformersGuideKeywordPage, { generateMetadata } from './highrate-trashformers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersGuideKeywordPage />;
}
