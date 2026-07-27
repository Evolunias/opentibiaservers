import BestRealeraWikiKeywordPage, { generateMetadata } from './best-realera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestRealeraWikiKeywordPage />;
}
