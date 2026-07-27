import BestYurotsWikiKeywordPage, { generateMetadata } from './best-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestYurotsWikiKeywordPage />;
}
