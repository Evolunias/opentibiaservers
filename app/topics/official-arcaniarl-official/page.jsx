import OfficialArcaniarlOfficialKeywordPage, { generateMetadata } from './official-arcaniarl-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlOfficialKeywordPage />;
}
