import ActiveYurotsWikiKeywordPage, { generateMetadata } from './active-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveYurotsWikiKeywordPage />;
}
