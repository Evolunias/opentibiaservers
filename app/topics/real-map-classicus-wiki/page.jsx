import RealMapClassicusWikiKeywordPage, { generateMetadata } from './real-map-classicus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapClassicusWikiKeywordPage />;
}
