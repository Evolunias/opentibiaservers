import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-pvp-server-europe');
}

export default function RealeraPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-pvp-server-europe" />;
}
