import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-canob-server');
}

export default function NoResetCanobServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-canob-server" />;
}
