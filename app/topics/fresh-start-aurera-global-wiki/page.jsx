import FreshStartAureraGlobalWikiKeywordPage, { generateMetadata } from './fresh-start-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAureraGlobalWikiKeywordPage />;
}
