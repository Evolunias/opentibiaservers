import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-server');
}

export default function OfficialCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-server" />;
}
