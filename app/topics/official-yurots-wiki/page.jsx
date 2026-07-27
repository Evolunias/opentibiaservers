import OfficialYurotsWikiKeywordPage, { generateMetadata } from './official-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialYurotsWikiKeywordPage />;
}
