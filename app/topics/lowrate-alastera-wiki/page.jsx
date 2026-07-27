import LowrateAlasteraWikiKeywordPage, { generateMetadata } from './lowrate-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateAlasteraWikiKeywordPage />;
}
