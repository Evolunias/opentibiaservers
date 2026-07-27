import ActiveTibiaoriginsWikiKeywordPage, { generateMetadata } from './active-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaoriginsWikiKeywordPage />;
}
