import NewTrashformersWebsiteKeywordPage, { generateMetadata } from './new-trashformers-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTrashformersWebsiteKeywordPage />;
}
