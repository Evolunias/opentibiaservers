import TopArcaniarlWebsiteKeywordPage, { generateMetadata } from './top-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArcaniarlWebsiteKeywordPage />;
}
