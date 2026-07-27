import ActiveMediviaWikiKeywordPage, { generateMetadata } from './active-medivia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaWikiKeywordPage />;
}
