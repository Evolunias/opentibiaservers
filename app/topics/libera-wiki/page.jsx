import LiberaWikiKeywordPage, { generateMetadata } from './libera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaWikiKeywordPage />;
}
