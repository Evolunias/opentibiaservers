import HighrateMediviaWikiKeywordPage, { generateMetadata } from './highrate-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMediviaWikiKeywordPage />;
}
