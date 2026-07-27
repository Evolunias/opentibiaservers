import NoResetArchlightWikiKeywordPage, { generateMetadata } from './no-reset-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightWikiKeywordPage />;
}
