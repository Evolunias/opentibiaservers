import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp');
}

export default function ThorniaPvpKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp" />;
}
