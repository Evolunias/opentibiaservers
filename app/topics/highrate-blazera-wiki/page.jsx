import HighrateBlazeraWikiKeywordPage, { generateMetadata } from './highrate-blazera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateBlazeraWikiKeywordPage />;
}
