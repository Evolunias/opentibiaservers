import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-register');
}

export default function NoResetClassickDrakoriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-register" />;
}
