import NoResetLumineraWikiKeywordPage, { generateMetadata } from './no-reset-luminera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetLumineraWikiKeywordPage />;
}
