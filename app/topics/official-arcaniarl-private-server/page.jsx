import OfficialArcaniarlPrivateServerKeywordPage, { generateMetadata } from './official-arcaniarl-private-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArcaniarlPrivateServerKeywordPage />;
}
