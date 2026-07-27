import Tibia100FreshStartWikiKeywordPage, { generateMetadata } from './tibia-10-0-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100FreshStartWikiKeywordPage />;
}
