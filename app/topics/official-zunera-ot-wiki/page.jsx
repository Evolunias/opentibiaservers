import OfficialZuneraOtWikiKeywordPage, { generateMetadata } from './official-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialZuneraOtWikiKeywordPage />;
}
