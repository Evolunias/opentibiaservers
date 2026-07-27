import ActiveTrashformersGuideKeywordPage, { generateMetadata } from './active-trashformers-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersGuideKeywordPage />;
}
