import TopTrashformersWebsiteKeywordPage, { generateMetadata } from './top-trashformers-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTrashformersWebsiteKeywordPage />;
}
