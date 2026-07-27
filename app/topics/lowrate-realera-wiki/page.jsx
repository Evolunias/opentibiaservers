import LowrateRealeraWikiKeywordPage, { generateMetadata } from './lowrate-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealeraWikiKeywordPage />;
}
