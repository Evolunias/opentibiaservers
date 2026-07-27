import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-ots');
}

export default function OfficialCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-ots" />;
}
