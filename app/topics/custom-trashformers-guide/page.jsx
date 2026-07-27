import CustomTrashformersGuideKeywordPage, { generateMetadata } from './custom-trashformers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersGuideKeywordPage />;
}
