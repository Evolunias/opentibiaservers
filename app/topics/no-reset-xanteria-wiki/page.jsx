import NoResetXanteriaWikiKeywordPage, { generateMetadata } from './no-reset-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetXanteriaWikiKeywordPage />;
}
