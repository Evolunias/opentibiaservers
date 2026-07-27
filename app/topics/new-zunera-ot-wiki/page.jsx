import NewZuneraOtWikiKeywordPage, { generateMetadata } from './new-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewZuneraOtWikiKeywordPage />;
}
