import RealMapZezeniaOnlineWikiKeywordPage, { generateMetadata } from './real-map-zezenia-online-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapZezeniaOnlineWikiKeywordPage />;
}
