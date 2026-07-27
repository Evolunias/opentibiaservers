import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-pvp-server-brazil');
}

export default function OlderaPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-pvp-server-brazil" />;
}
