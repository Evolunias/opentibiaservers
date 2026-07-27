import ActiveUnlineWikiKeywordPage, { generateMetadata } from './active-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveUnlineWikiKeywordPage />;
}
