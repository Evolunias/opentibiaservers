import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-login');
}

export default function NewCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-login" />;
}
