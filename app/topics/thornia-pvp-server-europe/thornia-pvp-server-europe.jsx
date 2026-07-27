import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvp-server-europe');
}

export default function ThorniaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvp-server-europe" />;
}
