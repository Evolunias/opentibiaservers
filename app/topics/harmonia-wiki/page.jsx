import HarmoniaWikiKeywordPage, { generateMetadata } from './harmonia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaWikiKeywordPage />;
}
