import MadnessaliveWikiKeywordPage, { generateMetadata } from './madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveWikiKeywordPage />;
}
