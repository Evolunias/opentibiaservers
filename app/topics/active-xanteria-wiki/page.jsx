import ActiveXanteriaWikiKeywordPage, { generateMetadata } from './active-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaWikiKeywordPage />;
}
