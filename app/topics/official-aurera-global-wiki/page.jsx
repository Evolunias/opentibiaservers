import OfficialAureraGlobalWikiKeywordPage, { generateMetadata } from './official-aurera-global-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAureraGlobalWikiKeywordPage />;
}
