import LowrateMadnessaliveWikiKeywordPage, { generateMetadata } from './lowrate-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMadnessaliveWikiKeywordPage />;
}
