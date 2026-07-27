import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-cyntara-server');
}

export default function NonPvpCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-cyntara-server" />;
}
