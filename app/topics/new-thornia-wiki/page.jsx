import NewThorniaWikiKeywordPage, { generateMetadata } from './new-thornia-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewThorniaWikiKeywordPage />;
}
