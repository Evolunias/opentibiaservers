import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-6-no-reset-server');
}

export default function Realesta76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-6-no-reset-server" />;
}
