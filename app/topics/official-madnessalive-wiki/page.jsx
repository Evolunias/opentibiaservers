import OfficialMadnessaliveWikiKeywordPage, { generateMetadata } from './official-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMadnessaliveWikiKeywordPage />;
}
