import RealMapYurotsWikiKeywordPage, { generateMetadata } from './real-map-yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapYurotsWikiKeywordPage />;
}
