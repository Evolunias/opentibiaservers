import HighrateTibiantisWikiKeywordPage, { generateMetadata } from './highrate-tibiantis-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisWikiKeywordPage />;
}
