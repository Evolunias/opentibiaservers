import NoResetEvoleraWikiKeywordPage, { generateMetadata } from './no-reset-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoleraWikiKeywordPage />;
}
