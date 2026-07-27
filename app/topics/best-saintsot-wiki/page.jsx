import BestSaintsotWikiKeywordPage, { generateMetadata } from './best-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestSaintsotWikiKeywordPage />;
}
