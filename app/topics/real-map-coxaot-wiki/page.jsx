import RealMapCoxaotWikiKeywordPage, { generateMetadata } from './real-map-coxaot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCoxaotWikiKeywordPage />;
}
