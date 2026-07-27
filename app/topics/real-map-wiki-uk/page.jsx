import RealMapWikiUkKeywordPage, { generateMetadata } from './real-map-wiki-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiUkKeywordPage />;
}
