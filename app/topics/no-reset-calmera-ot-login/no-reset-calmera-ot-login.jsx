import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-login');
}

export default function NoResetCalmeraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-login" />;
}
