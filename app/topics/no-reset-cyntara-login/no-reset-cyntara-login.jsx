import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-cyntara-login');
}

export default function NoResetCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-cyntara-login" />;
}
