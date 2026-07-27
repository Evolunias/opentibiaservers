import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-server');
}

export default function NoResetAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-server" />;
}
