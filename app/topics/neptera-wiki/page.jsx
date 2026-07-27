import NepteraWikiKeywordPage, { generateMetadata } from './neptera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepteraWikiKeywordPage />;
}
