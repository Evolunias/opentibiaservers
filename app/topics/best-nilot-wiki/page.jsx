import BestNilotWikiKeywordPage, { generateMetadata } from './best-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestNilotWikiKeywordPage />;
}
