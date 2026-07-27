import BestAlasteraWikiKeywordPage, { generateMetadata } from './best-alastera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAlasteraWikiKeywordPage />;
}
