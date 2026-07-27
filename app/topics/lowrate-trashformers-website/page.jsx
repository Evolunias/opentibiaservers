import LowrateTrashformersWebsiteKeywordPage, { generateMetadata } from './lowrate-trashformers-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTrashformersWebsiteKeywordPage />;
}
