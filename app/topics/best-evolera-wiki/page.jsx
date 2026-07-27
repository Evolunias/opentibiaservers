import BestEvoleraWikiKeywordPage, { generateMetadata } from './best-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestEvoleraWikiKeywordPage />;
}
