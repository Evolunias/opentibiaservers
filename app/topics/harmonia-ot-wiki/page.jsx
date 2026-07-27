import HarmoniaOtWikiKeywordPage, { generateMetadata } from './harmonia-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaOtWikiKeywordPage />;
}
