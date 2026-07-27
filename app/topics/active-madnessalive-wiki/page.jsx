import ActiveMadnessaliveWikiKeywordPage, { generateMetadata } from './active-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMadnessaliveWikiKeywordPage />;
}
