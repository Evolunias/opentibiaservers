import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-10-0-no-reset-server');
}

export default function Realesta100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-10-0-no-reset-server" />;
}
