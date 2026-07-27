import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-1-no-reset-server');
}

export default function Rubinot81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-1-no-reset-server" />;
}
