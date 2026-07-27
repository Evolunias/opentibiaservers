import PopularSaintsotWebsiteKeywordPage, { generateMetadata } from './popular-saintsot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSaintsotWebsiteKeywordPage />;
}
