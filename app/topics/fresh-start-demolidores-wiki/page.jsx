import FreshStartDemolidoresWikiKeywordPage, { generateMetadata } from './fresh-start-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartDemolidoresWikiKeywordPage />;
}
