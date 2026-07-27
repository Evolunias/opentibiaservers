import CustomTrashformersWebsiteKeywordPage, { generateMetadata } from './custom-trashformers-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTrashformersWebsiteKeywordPage />;
}
