import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-cyntara-login');
}

export default function LowrateCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-cyntara-login" />;
}
