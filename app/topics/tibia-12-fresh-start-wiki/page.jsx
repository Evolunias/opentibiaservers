import Tibia12FreshStartWikiKeywordPage, { generateMetadata } from './tibia-12-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12FreshStartWikiKeywordPage />;
}
