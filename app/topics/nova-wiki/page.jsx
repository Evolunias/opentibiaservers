import NovaWikiKeywordPage, { generateMetadata } from './nova-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaWikiKeywordPage />;
}
