import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-15-no-reset-server');
}

export default function Realesta15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-15-no-reset-server" />;
}
