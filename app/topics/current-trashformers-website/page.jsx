import CurrentTrashformersWebsiteKeywordPage, { generateMetadata } from './current-trashformers-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTrashformersWebsiteKeywordPage />;
}
