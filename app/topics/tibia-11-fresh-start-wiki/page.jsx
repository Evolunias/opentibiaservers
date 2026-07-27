import Tibia11FreshStartWikiKeywordPage, { generateMetadata } from './tibia-11-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11FreshStartWikiKeywordPage />;
}
