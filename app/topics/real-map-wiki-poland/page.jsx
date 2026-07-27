import RealMapWikiPolandKeywordPage, { generateMetadata } from './real-map-wiki-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiPolandKeywordPage />;
}
