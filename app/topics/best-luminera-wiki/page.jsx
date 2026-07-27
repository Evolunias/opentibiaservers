import BestLumineraWikiKeywordPage, { generateMetadata } from './best-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestLumineraWikiKeywordPage />;
}
