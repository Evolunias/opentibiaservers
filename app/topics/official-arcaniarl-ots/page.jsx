import OfficialArcaniarlOtsKeywordPage, { generateMetadata } from './official-arcaniarl-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlOtsKeywordPage />;
}
