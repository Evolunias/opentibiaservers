import BestNostaltherWikiKeywordPage, { generateMetadata } from './best-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNostaltherWikiKeywordPage />;
}
