import NoResetDuraOnlineWikiKeywordPage, { generateMetadata } from './no-reset-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetDuraOnlineWikiKeywordPage />;
}
