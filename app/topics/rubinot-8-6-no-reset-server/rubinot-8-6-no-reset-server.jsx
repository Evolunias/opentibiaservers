import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-6-no-reset-server');
}

export default function Rubinot86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-6-no-reset-server" />;
}
