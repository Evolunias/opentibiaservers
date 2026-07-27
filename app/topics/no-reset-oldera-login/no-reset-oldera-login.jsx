import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-oldera-login');
}

export default function NoResetOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-oldera-login" />;
}
