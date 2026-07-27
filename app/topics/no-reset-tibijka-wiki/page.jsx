import NoResetTibijkaWikiKeywordPage, { generateMetadata } from './no-reset-tibijka-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibijkaWikiKeywordPage />;
}
