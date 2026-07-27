import NoResetMadnessaliveWikiKeywordPage, { generateMetadata } from './no-reset-madnessalive-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMadnessaliveWikiKeywordPage />;
}
