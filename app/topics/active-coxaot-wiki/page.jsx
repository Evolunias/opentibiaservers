import ActiveCoxaotWikiKeywordPage, { generateMetadata } from './active-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotWikiKeywordPage />;
}
