import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiantis-register');
}

export default function NoResetTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiantis-register" />;
}
