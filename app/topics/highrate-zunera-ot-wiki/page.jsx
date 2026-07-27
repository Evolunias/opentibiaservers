import HighrateZuneraOtWikiKeywordPage, { generateMetadata } from './highrate-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZuneraOtWikiKeywordPage />;
}
