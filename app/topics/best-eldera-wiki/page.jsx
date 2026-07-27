import BestElderaWikiKeywordPage, { generateMetadata } from './best-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaWikiKeywordPage />;
}
