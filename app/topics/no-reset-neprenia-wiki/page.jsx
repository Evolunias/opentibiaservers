import NoResetNepreniaWikiKeywordPage, { generateMetadata } from './no-reset-neprenia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaWikiKeywordPage />;
}
