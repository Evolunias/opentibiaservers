import NoResetBaiakIlusionWikiKeywordPage, { generateMetadata } from './no-reset-baiak-ilusion-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetBaiakIlusionWikiKeywordPage />;
}
