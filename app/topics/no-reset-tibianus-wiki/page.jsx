import NoResetTibianusWikiKeywordPage, { generateMetadata } from './no-reset-tibianus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibianusWikiKeywordPage />;
}
