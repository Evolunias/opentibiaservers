import CurrentSaintsotWikiKeywordPage, { generateMetadata } from './current-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentSaintsotWikiKeywordPage />;
}
