import NoResetOriginaltibiaWikiKeywordPage, { generateMetadata } from './no-reset-originaltibia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOriginaltibiaWikiKeywordPage />;
}
