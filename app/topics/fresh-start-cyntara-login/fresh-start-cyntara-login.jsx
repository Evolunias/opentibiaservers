import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-login');
}

export default function FreshStartCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-login" />;
}
