import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-argentina');
}

export default function ArcaniarlPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-argentina" />;
}
