import OfficialArcaniarlServerKeywordPage, { generateMetadata } from './official-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlServerKeywordPage />;
}
