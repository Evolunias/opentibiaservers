import CurrentDemolidoresWikiKeywordPage, { generateMetadata } from './current-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentDemolidoresWikiKeywordPage />;
}
