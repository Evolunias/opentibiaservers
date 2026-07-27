import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-client');
}

export default function NoResetAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-client" />;
}
