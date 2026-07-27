import HighrateTibianusWikiKeywordPage, { generateMetadata } from './highrate-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibianusWikiKeywordPage />;
}
