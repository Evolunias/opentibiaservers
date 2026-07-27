import RealMapEvoleraWikiKeywordPage, { generateMetadata } from './real-map-evolera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapEvoleraWikiKeywordPage />;
}
