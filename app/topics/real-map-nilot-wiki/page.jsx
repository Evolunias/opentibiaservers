import RealMapNilotWikiKeywordPage, { generateMetadata } from './real-map-nilot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNilotWikiKeywordPage />;
}
