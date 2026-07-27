import LowrateTrashformersGuideKeywordPage, { generateMetadata } from './lowrate-trashformers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTrashformersGuideKeywordPage />;
}
