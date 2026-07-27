import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-usa');
}

export default function OlderaPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-usa" />;
}
