import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-client');
}

export default function OfficialCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-client" />;
}
