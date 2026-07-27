import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-official');
}

export default function CurrentCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-official" />;
}
