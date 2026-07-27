import OfficialHarmoniaOtWikiKeywordPage, { generateMetadata } from './official-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialHarmoniaOtWikiKeywordPage />;
}
