import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-ots');
}

export default function NoResetAmeriaOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-ots" />;
}
