import Tibia81FreshStartWikiKeywordPage, { generateMetadata } from './tibia-8-1-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81FreshStartWikiKeywordPage />;
}
