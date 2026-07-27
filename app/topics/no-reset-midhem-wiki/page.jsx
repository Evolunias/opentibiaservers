import NoResetMidhemWikiKeywordPage, { generateMetadata } from './no-reset-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMidhemWikiKeywordPage />;
}
