import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-7-4-no-reset-server');
}

export default function Rubinot74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-7-4-no-reset-server" />;
}
