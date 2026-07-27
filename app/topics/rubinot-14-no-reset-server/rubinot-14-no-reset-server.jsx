import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-14-no-reset-server');
}

export default function Rubinot14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-14-no-reset-server" />;
}
