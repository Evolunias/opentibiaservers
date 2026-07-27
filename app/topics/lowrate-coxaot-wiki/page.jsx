import LowrateCoxaotWikiKeywordPage, { generateMetadata } from './lowrate-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotWikiKeywordPage />;
}
