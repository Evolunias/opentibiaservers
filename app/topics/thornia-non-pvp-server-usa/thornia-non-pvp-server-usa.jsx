import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-usa');
}

export default function ThorniaNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-usa" />;
}
