import RealMapDuraOnlineWikiKeywordPage, { generateMetadata } from './real-map-dura-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapDuraOnlineWikiKeywordPage />;
}
