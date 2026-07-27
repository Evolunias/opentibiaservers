import CurrentTibiaoriginsWikiKeywordPage, { generateMetadata } from './current-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaoriginsWikiKeywordPage />;
}
