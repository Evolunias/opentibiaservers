import BestImperianicWikiKeywordPage, { generateMetadata } from './best-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestImperianicWikiKeywordPage />;
}
