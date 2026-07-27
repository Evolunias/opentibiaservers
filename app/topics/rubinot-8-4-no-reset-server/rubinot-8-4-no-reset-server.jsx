import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-8-4-no-reset-server');
}

export default function Rubinot84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-8-4-no-reset-server" />;
}
