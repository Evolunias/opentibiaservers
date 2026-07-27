import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-cyntara-server');
}

export default function PvpCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-cyntara-server" />;
}
