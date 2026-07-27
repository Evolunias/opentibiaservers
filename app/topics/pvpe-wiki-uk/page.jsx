import PvpeWikiUkKeywordPage, { generateMetadata } from './pvpe-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeWikiUkKeywordPage />;
}
