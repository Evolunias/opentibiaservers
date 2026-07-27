import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-usa');
}

export default function ArcaniarlPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-usa" />;
}
