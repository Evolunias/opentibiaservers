import Tibia76FreshStartWikiKeywordPage, { generateMetadata } from './tibia-7-6-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76FreshStartWikiKeywordPage />;
}
