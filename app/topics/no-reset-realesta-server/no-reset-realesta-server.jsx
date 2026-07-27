import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta-server');
}

export default function NoResetRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta-server" />;
}
