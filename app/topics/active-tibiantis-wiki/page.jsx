import ActiveTibiantisWikiKeywordPage, { generateMetadata } from './active-tibiantis-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisWikiKeywordPage />;
}
