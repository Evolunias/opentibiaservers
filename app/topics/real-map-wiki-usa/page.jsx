import RealMapWikiUsaKeywordPage, { generateMetadata } from './real-map-wiki-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapWikiUsaKeywordPage />;
}
