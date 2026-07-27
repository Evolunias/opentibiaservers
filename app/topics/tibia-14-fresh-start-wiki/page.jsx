import Tibia14FreshStartWikiKeywordPage, { generateMetadata } from './tibia-14-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14FreshStartWikiKeywordPage />;
}
