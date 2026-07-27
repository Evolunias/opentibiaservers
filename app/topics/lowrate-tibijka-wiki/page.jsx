import LowrateTibijkaWikiKeywordPage, { generateMetadata } from './lowrate-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibijkaWikiKeywordPage />;
}
