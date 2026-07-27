import CurrentTrashformersGuideKeywordPage, { generateMetadata } from './current-trashformers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersGuideKeywordPage />;
}
