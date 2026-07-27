import ActiveClassicusWikiKeywordPage, { generateMetadata } from './active-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusWikiKeywordPage />;
}
