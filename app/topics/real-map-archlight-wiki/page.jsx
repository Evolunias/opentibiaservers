import RealMapArchlightWikiKeywordPage, { generateMetadata } from './real-map-archlight-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapArchlightWikiKeywordPage />;
}
