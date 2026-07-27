import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-login');
}

export default function NoResetZuneraOtLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-login" />;
}
