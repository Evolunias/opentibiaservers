import RealMapMidhemWikiKeywordPage, { generateMetadata } from './real-map-midhem-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapMidhemWikiKeywordPage />;
}
