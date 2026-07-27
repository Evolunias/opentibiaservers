import TopNostaltherWikiKeywordPage, { generateMetadata } from './top-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopNostaltherWikiKeywordPage />;
}
