import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-login');
}

export default function ActiveCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-login" />;
}
