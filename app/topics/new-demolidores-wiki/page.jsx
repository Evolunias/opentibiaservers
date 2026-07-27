import NewDemolidoresWikiKeywordPage, { generateMetadata } from './new-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewDemolidoresWikiKeywordPage />;
}
