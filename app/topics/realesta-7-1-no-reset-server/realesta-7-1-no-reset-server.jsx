import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-7-1-no-reset-server');
}

export default function Realesta71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-7-1-no-reset-server" />;
}
