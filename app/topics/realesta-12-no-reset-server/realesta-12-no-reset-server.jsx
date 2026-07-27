import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-12-no-reset-server');
}

export default function Realesta12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-12-no-reset-server" />;
}
