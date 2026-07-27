import FreshStartNostaltherWikiKeywordPage, { generateMetadata } from './fresh-start-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartNostaltherWikiKeywordPage />;
}
