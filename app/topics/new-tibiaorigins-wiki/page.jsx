import NewTibiaoriginsWikiKeywordPage, { generateMetadata } from './new-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaoriginsWikiKeywordPage />;
}
