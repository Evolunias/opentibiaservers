import TibijkaWikiKeywordPage, { generateMetadata } from './tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaWikiKeywordPage />;
}
