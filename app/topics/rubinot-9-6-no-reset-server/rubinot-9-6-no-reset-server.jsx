import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-no-reset-server');
}

export default function Rubinot96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-no-reset-server" />;
}
