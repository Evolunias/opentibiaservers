import Tibia15FreshStartWikiKeywordPage, { generateMetadata } from './tibia-15-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15FreshStartWikiKeywordPage />;
}
