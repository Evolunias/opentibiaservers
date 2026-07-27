import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-register');
}

export default function NoResetZuneraOtRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-register" />;
}
