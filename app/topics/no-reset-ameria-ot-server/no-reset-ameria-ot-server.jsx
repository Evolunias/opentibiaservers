import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-ot-server');
}

export default function NoResetAmeriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-ot-server" />;
}
