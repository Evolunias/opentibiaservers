import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-france');
}

export default function NoResetRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-france" />;
}
