import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-brazil');
}

export default function ThorniaNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-brazil" />;
}
