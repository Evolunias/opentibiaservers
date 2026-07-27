import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-uk');
}

export default function OlderaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-uk" />;
}
