import OceraWikiKeywordPage, { generateMetadata } from './ocera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OceraWikiKeywordPage />;
}
