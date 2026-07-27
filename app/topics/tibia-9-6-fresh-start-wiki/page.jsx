import Tibia96FreshStartWikiKeywordPage, { generateMetadata } from './tibia-9-6-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96FreshStartWikiKeywordPage />;
}
