import RealMapElderaWikiKeywordPage, { generateMetadata } from './real-map-eldera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaWikiKeywordPage />;
}
