import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-client');
}

export default function NoResetAureraGlobalClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-client" />;
}
