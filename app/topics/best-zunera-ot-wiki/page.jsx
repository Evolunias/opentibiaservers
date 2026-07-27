import BestZuneraOtWikiKeywordPage, { generateMetadata } from './best-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestZuneraOtWikiKeywordPage />;
}
