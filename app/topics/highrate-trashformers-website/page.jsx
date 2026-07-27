import HighrateTrashformersWebsiteKeywordPage, { generateMetadata } from './highrate-trashformers-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTrashformersWebsiteKeywordPage />;
}
