import LowrateRealestaWikiKeywordPage, { generateMetadata } from './lowrate-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealestaWikiKeywordPage />;
}
