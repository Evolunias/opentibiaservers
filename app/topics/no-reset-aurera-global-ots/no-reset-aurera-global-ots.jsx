import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-aurera-global-ots');
}

export default function NoResetAureraGlobalOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-aurera-global-ots" />;
}
