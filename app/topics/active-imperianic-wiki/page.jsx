import ActiveImperianicWikiKeywordPage, { generateMetadata } from './active-imperianic-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveImperianicWikiKeywordPage />;
}
