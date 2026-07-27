import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-14-no-reset-server');
}

export default function Realesta14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-14-no-reset-server" />;
}
