import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-4-no-reset-server');
}

export default function Realesta74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-4-no-reset-server" />;
}
