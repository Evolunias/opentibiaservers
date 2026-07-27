import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-europe');
}

export default function OlderaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-europe" />;
}
