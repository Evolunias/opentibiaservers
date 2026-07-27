import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-brazil');
}

export default function ThorniaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-brazil" />;
}
