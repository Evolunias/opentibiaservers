import CustomHarmoniaOtWikiKeywordPage, { generateMetadata } from './custom-harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtWikiKeywordPage />;
}
