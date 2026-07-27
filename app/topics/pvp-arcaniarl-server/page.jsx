import PvpArcaniarlServerKeywordPage, { generateMetadata } from './pvp-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpArcaniarlServerKeywordPage />;
}
