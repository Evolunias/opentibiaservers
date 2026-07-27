import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-server-europe');
}

export default function KasteriaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-server-europe" />;
}
