import NoResetSerenityWikiKeywordPage, { generateMetadata } from './no-reset-serenity-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetSerenityWikiKeywordPage />;
}
