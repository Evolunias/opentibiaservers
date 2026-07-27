import PopularCoxaotWikiKeywordPage, { generateMetadata } from './popular-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotWikiKeywordPage />;
}
