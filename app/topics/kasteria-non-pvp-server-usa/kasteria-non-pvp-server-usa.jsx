import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-non-pvp-server-usa');
}

export default function KasteriaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-non-pvp-server-usa" />;
}
