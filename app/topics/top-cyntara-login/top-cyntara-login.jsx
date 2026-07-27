import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-cyntara-login');
}

export default function TopCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="top-cyntara-login" />;
}
