import LowrateTibiaoriginsWikiKeywordPage, { generateMetadata } from './lowrate-tibiaorigins-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaoriginsWikiKeywordPage />;
}
