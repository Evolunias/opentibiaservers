import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-login');
}

export default function NoResetClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-login" />;
}
