import FreshStartHarmoniaOtWikiKeywordPage, { generateMetadata } from './fresh-start-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartHarmoniaOtWikiKeywordPage />;
}
