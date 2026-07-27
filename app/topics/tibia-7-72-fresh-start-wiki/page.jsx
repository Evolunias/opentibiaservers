import Tibia772FreshStartWikiKeywordPage, { generateMetadata } from './tibia-7-72-fresh-start-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772FreshStartWikiKeywordPage />;
}
