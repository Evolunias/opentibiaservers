import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-uk');
}

export default function ThorniaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-uk" />;
}
