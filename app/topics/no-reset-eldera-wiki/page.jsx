import NoResetElderaWikiKeywordPage, { generateMetadata } from './no-reset-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaWikiKeywordPage />;
}
