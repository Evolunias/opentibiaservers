import CurrentHarmoniaOtWikiKeywordPage, { generateMetadata } from './current-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentHarmoniaOtWikiKeywordPage />;
}
