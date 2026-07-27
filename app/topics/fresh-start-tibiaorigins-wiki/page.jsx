import FreshStartTibiaoriginsWikiKeywordPage, { generateMetadata } from './fresh-start-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaoriginsWikiKeywordPage />;
}
