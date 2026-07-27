import OfficialMediviaWikiKeywordPage, { generateMetadata } from './official-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMediviaWikiKeywordPage />;
}
