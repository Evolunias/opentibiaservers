import HighrateArcaniarlWebsiteKeywordPage, { generateMetadata } from './highrate-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArcaniarlWebsiteKeywordPage />;
}
