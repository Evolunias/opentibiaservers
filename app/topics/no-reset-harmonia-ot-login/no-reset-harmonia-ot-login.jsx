import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-login');
}

export default function NoResetHarmoniaOtLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-login" />;
}
