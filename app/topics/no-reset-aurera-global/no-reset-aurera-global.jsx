import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global');
}

export default function NoResetAureraGlobalKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global" />;
}
