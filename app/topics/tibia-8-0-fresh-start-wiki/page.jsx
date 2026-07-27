import Tibia80FreshStartWikiKeywordPage, { generateMetadata } from './tibia-8-0-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80FreshStartWikiKeywordPage />;
}
