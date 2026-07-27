import LowrateMediviaWikiKeywordPage, { generateMetadata } from './lowrate-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMediviaWikiKeywordPage />;
}
