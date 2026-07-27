import BestTibiaoriginsWikiKeywordPage, { generateMetadata } from './best-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaoriginsWikiKeywordPage />;
}
