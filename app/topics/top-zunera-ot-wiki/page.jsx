import TopZuneraOtWikiKeywordPage, { generateMetadata } from './top-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZuneraOtWikiKeywordPage />;
}
