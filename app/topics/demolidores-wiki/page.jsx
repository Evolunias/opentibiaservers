import DemolidoresWikiKeywordPage, { generateMetadata } from './demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresWikiKeywordPage />;
}
