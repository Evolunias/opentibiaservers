import PopularArcaniarlWebsiteKeywordPage, { generateMetadata } from './popular-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularArcaniarlWebsiteKeywordPage />;
}
