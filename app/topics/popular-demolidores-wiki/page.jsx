import PopularDemolidoresWikiKeywordPage, { generateMetadata } from './popular-demolidores-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularDemolidoresWikiKeywordPage />;
}
