import BestAureraGlobalWikiKeywordPage, { generateMetadata } from './best-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestAureraGlobalWikiKeywordPage />;
}
