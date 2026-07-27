import NonPvpArcaniarlServerKeywordPage, { generateMetadata } from './non-pvp-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpArcaniarlServerKeywordPage />;
}
