import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-login');
}

export default function CustomCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-login" />;
}
