import HighrateCoxaotWikiKeywordPage, { generateMetadata } from './highrate-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotWikiKeywordPage />;
}
