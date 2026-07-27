import TrashformersWebsiteKeywordPage, { generateMetadata } from './trashformers-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersWebsiteKeywordPage />;
}
