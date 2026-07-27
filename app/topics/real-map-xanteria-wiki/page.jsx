import RealMapXanteriaWikiKeywordPage, { generateMetadata } from './real-map-xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapXanteriaWikiKeywordPage />;
}
