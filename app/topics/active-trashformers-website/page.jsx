import ActiveTrashformersWebsiteKeywordPage, { generateMetadata } from './active-trashformers-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTrashformersWebsiteKeywordPage />;
}
