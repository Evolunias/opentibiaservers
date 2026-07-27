import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-11-no-reset-server');
}

export default function Realesta11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-11-no-reset-server" />;
}
