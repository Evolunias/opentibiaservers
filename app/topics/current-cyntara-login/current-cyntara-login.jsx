import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-cyntara-login');
}

export default function CurrentCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="current-cyntara-login" />;
}
