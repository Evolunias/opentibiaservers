import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-blazera-login');
}

export default function NoResetBlazeraLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-blazera-login" />;
}
