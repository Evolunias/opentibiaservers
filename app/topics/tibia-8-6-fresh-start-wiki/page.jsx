import Tibia86FreshStartWikiKeywordPage, { generateMetadata } from './tibia-8-6-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86FreshStartWikiKeywordPage />;
}
