import EterniaWikiKeywordPage, { generateMetadata } from './eternia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaWikiKeywordPage />;
}
