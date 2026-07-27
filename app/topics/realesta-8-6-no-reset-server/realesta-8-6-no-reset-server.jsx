import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-8-6-no-reset-server');
}

export default function Realesta86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-8-6-no-reset-server" />;
}
