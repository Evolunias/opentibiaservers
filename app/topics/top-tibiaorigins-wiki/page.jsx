import TopTibiaoriginsWikiKeywordPage, { generateMetadata } from './top-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaoriginsWikiKeywordPage />;
}
