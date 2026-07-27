import Tibia13FreshStartWikiKeywordPage, { generateMetadata } from './tibia-13-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13FreshStartWikiKeywordPage />;
}
