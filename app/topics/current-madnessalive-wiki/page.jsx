import CurrentMadnessaliveWikiKeywordPage, { generateMetadata } from './current-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveWikiKeywordPage />;
}
