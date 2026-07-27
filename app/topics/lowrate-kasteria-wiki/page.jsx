import LowrateKasteriaWikiKeywordPage, { generateMetadata } from './lowrate-kasteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateKasteriaWikiKeywordPage />;
}
