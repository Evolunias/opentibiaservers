import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-no-reset-server');
}

export default function Rubinot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-no-reset-server" />;
}
