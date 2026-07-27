import Tibia84FreshStartWikiKeywordPage, { generateMetadata } from './tibia-8-4-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84FreshStartWikiKeywordPage />;
}
