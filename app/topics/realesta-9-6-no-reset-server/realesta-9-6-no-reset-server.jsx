import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-9-6-no-reset-server');
}

export default function Realesta96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-9-6-no-reset-server" />;
}
