import RealMapNostaltherWikiKeywordPage, { generateMetadata } from './real-map-nostalther-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapNostaltherWikiKeywordPage />;
}
