import TrashformersScreenshotsKeywordPage, { generateMetadata } from './trashformers-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersScreenshotsKeywordPage />;
}
