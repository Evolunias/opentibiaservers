import FreshStartBlazeraWikiKeywordPage, { generateMetadata } from './fresh-start-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartBlazeraWikiKeywordPage />;
}
