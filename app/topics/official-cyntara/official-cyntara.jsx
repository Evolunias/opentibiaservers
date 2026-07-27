import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara');
}

export default function OfficialCyntaraKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara" />;
}
