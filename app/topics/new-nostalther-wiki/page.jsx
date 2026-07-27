import NewNostaltherWikiKeywordPage, { generateMetadata } from './new-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewNostaltherWikiKeywordPage />;
}
