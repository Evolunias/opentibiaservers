import ActiveDemolidoresWikiKeywordPage, { generateMetadata } from './active-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveDemolidoresWikiKeywordPage />;
}
