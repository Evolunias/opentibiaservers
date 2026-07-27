import FreshStartMadnessaliveWikiKeywordPage, { generateMetadata } from './fresh-start-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMadnessaliveWikiKeywordPage />;
}
