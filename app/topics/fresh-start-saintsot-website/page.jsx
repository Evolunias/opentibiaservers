import FreshStartSaintsotWebsiteKeywordPage, { generateMetadata } from './fresh-start-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartSaintsotWebsiteKeywordPage />;
}
