import RealMapUnlineWikiKeywordPage, { generateMetadata } from './real-map-unline-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapUnlineWikiKeywordPage />;
}
