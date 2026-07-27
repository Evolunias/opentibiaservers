import ActiveRealestaWikiKeywordPage, { generateMetadata } from './active-realesta-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveRealestaWikiKeywordPage />;
}
