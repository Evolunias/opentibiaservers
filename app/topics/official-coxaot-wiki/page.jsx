import OfficialCoxaotWikiKeywordPage, { generateMetadata } from './official-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialCoxaotWikiKeywordPage />;
}
