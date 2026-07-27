import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-13-no-reset-server');
}

export default function Rubinot13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-13-no-reset-server" />;
}
