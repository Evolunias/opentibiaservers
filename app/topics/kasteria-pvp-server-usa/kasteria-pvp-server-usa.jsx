import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-usa');
}

export default function KasteriaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-usa" />;
}
