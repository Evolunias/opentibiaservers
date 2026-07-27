import NoResetSaintsotWikiKeywordPage, { generateMetadata } from './no-reset-saintsot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSaintsotWikiKeywordPage />;
}
