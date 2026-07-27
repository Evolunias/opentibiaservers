import LowrateSaintsotWikiKeywordPage, { generateMetadata } from './lowrate-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateSaintsotWikiKeywordPage />;
}
