import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiara-login');
}

export default function NoResetTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiara-login" />;
}
