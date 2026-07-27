import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-non-pvp-server-europe');
}

export default function ThorniaNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="thornia-non-pvp-server-europe" />;
}
