import HighrateNostaltherWikiKeywordPage, { generateMetadata } from './highrate-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNostaltherWikiKeywordPage />;
}
