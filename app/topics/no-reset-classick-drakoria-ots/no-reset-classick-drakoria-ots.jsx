import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-ots');
}

export default function NoResetClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-ots" />;
}
