import OfficialNoxiousotWikiKeywordPage, { generateMetadata } from './official-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNoxiousotWikiKeywordPage />;
}
