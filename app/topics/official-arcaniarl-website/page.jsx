import OfficialArcaniarlWebsiteKeywordPage, { generateMetadata } from './official-arcaniarl-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlWebsiteKeywordPage />;
}
