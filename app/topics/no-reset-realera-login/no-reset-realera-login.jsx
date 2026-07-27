import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-login');
}

export default function NoResetRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-login" />;
}
