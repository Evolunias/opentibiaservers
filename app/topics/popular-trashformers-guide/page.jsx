import PopularTrashformersGuideKeywordPage, { generateMetadata } from './popular-trashformers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTrashformersGuideKeywordPage />;
}
