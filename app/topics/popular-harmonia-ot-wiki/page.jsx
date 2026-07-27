import PopularHarmoniaOtWikiKeywordPage, { generateMetadata } from './popular-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtWikiKeywordPage />;
}
