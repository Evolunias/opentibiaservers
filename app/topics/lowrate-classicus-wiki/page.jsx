import LowrateClassicusWikiKeywordPage, { generateMetadata } from './lowrate-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateClassicusWikiKeywordPage />;
}
