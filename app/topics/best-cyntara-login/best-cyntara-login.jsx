import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-login');
}

export default function BestCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-login" />;
}
