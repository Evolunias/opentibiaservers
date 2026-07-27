import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiascape-register');
}

export default function NoResetTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiascape-register" />;
}
