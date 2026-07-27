import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-pvp-server-europe');
}

export default function ElderaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-pvp-server-europe" />;
}
