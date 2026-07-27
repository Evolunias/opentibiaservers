import HighrateSaintsotWikiKeywordPage, { generateMetadata } from './highrate-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateSaintsotWikiKeywordPage />;
}
