import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-login');
}

export default function NoResetElderaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-login" />;
}
