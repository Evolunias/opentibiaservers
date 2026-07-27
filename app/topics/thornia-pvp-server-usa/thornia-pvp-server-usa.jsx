import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-usa');
}

export default function ThorniaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-usa" />;
}
