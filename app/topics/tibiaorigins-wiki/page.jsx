import TibiaoriginsWikiKeywordPage, { generateMetadata } from './tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsWikiKeywordPage />;
}
