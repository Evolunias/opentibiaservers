import TrashformersSeasonKeywordPage, { generateMetadata } from './trashformers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersSeasonKeywordPage />;
}
