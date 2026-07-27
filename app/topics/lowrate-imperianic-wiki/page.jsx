import LowrateImperianicWikiKeywordPage, { generateMetadata } from './lowrate-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateImperianicWikiKeywordPage />;
}
