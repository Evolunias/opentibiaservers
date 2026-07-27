import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-login');
}

export default function PopularCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-login" />;
}
