import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-register');
}

export default function NoResetCalmeraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-register" />;
}
