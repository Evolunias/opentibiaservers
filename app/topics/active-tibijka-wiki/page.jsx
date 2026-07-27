import ActiveTibijkaWikiKeywordPage, { generateMetadata } from './active-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibijkaWikiKeywordPage />;
}
