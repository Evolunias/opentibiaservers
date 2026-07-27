import BestDemolidoresWikiKeywordPage, { generateMetadata } from './best-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestDemolidoresWikiKeywordPage />;
}
