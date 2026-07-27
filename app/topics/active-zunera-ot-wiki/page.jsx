import ActiveZuneraOtWikiKeywordPage, { generateMetadata } from './active-zunera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZuneraOtWikiKeywordPage />;
}
