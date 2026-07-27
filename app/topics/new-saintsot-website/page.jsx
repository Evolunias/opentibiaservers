import NewSaintsotWebsiteKeywordPage, { generateMetadata } from './new-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSaintsotWebsiteKeywordPage />;
}
